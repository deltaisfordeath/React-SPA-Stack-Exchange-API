import React, { useState } from 'react';
import { getQuestions } from './requests';
import Question from './Question';
import Loader from './Loader';
import './SearchForm.css';

export default function SearchForm() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  async function handleSubmit() {
    if (query === '') {
      alert('Please enter a keyword');
      return;
    } else {
      setLoading(true);
      let response = await getQuestions(query);
      setQuestions(response);
      setLoading(false);
      if (response.length === 0) alert(`No results found for search: ${query}`);
    }
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="SearchForm-header">
        <h1 id="headerText">Search on </h1>
        <img
          id="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/02/Stack_Overflow_logo.svg"
          alt="Stack Overflow logo"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Type your question here..."
        />
        <button type="submit">Search!</button>
      </form>
      {questions.map((q) => (
        <Question question={q} key={q.question_id} />
      ))}
    </div>
  );
}
