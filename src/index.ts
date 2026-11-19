interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "谢晴",
  age: 20,
}
console.log("Hello, 谢晴!", __dirname, user);