import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () =>  {
  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input type="text" className="form-control" id="formEventTitle" placeholder="タイトルを入力してください。"></input>
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <input type="textarea" className="form-control" id="formEventBody" placeholder="ボディーを入力してください。"></input>
        </div>

        <button className="btn btn-primary">作成</button>
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
