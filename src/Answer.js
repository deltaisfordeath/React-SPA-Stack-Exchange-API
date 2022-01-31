import React from 'react';
import './Answer.css';

export default function Answer(props) {
  if (!props.answer.body) {
    return <div className="Answer">This question has not been answered.</div>;
  }

  let answer = props.answer;
  //dangerouslySetInnerHTML - HTML needs to be sanitized! **********
  return (
    <div className={`Answer ${answer.is_accepted ? 'accepted' : ''}`}>
      {answer.is_accepted ? (
        <div className="accepted-header">Accepted Answer</div>
      ) : (
        ''
      )}
      <div
        className="Answer-body"
        dangerouslySetInnerHTML={{ __html: answer.body }}
      ></div>
      <div className="Answer-footer">
        Answered by{' '}
        <span
          dangerouslySetInnerHTML={{ __html: answer.owner.display_name }}
        ></span>
      </div>
    </div>
  );
}
