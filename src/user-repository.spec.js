const { MongoClient } = require("mongodb");

describe("UserRepository", () => {
  let userRepository;
  let collection;
  let client;

  beforeAll(async () => {
    const uri =
      "mongodb+srv://vitor2908:33516568@clusterinicial.ga1at.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    client = new MongoClient(uri);
    await client.connect();
  });

  afterAll(async () => {
    await client.close();
  });

  describe("findOneByEmail", () => {
    test.todo("Deve retornar o usuário manoelvitorbrito@gmail.com");
    test.todo("Deve lançar uma exceção para um usuário não existente");
  });

  describe("insert", () => {
    test.todo("Inserir um novo usuário");
  });

  describe("update", () => {
    test.todo("deve atualizar um usuário existente");
    test.todo("deve lançar uma execeção para um usuário não existente");
  });

  describe("update", () => {
    test.todo("deve remover um usuário existente");
    test.todo("deve lançar uma execeção para um usuário não existente");
  });

  describe("findAll", () => {
    test.todo("Deve retornar uma lista vazia de usuário");
    test.todo("Deve retornar uma lista contendo dois  usuários");
  });
});
