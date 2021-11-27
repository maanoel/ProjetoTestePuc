const UserRepository = require("./user-repository");
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

    collection = client.db("users_db").collection("users");
    userRepository = new UserRepository(collection);
  });

  afterAll(async () => {
    await client.close();
  });

  beforeEach(async () => {
    await collection.deleteMany({});
  });

  describe("findOneByEmail", () => {
    test("Deve retornar o usuário manoelvitorbrito@gmail.com", async () => {
      const result = await collection.insertOne({
        name: "vitor",
        email: "manoelvitorbrito@gmail.com",
      });

      const user = await userRepository.findOneByEmail(
        "manoelvitorbrito@gmail.com"
      );

      expect(user).toStrictEqual({
        _id: result.insertedId,
        name: "vitor",
        email: "manoelvitorbrito@gmail.com",
      });
    });
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
