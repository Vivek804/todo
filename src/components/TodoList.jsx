export default function TodoListComponent() {
    const today = new Date();
    const targetDate = new Date(
      today.getFullYear() + 5,
      today.getMonth(),
      today.getDate()
    );
    const list = [
      { id: 1, task: "Learn Spring", targetDate: targetDate, done: false },
      { id: 2, task: "Learn ReactJs", targetDate: targetDate, done: false },
      { id: 3, task: "Learn AWS", targetDate: targetDate, done: false },
    ];
    return (
      <div className="container">
        <h1>Your Todos...</h1>
        <table className="table">
          <thead>
            <tr>
              <td>ID</td>
              <td>DESCRIPTION</td>
              <td>TARGET DATE</td>
              <td>STATUS</td>
            </tr>
          </thead>
          <tbody>
            {list.map((list) => (
              <tr key={list.id}>
                <td>{list.id}</td>
                <td>{list.task}</td>
                <td>{list.targetDate.toDateString()}</td>
                <td>{list.done.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }