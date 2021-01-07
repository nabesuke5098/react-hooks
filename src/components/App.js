import React, { useReducer, useState } from 'react';
import reducer from '../reducers';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () =>  {
  const [state, dispatch] = useReducer(reducer,[]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = e => {
    e.preventDefault();
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    });
    setTitle('');
    setBody('');
  }

  console.log({state})

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input type="text" className="form-control" id="formEventTitle" value={title} placeholder="タイトルを入力してください。" onChange={e => setTitle(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <input type="textarea" className="form-control" id="formEventBody" value={body} placeholder="ボディーを入力してください。" onChange={e => setBody(e.target.value)} />
        </div>

        <button className="btn btn-primary" onClick={addEvent}>作成</button>
        <button className="btn btn-danger">削除</button>

      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  );
}

export default App;
