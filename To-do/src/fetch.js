export class Fetch {
  constructor(url,method="GET") {
    this.url = url;
    this.method=method
  }

  getData = () => {
    const result = fetch(`http://localhost:5000/${this.url}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => response);
    return result
  };

  updateData = (task) => {
     console.log(this.method)
    const result = fetch(`http://localhost:5000/${this.url}`, {
      method: this.method,
      mode: "cors",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
    .then((res) => res.json())
    .then((response) => response);
    return result
  };
}
