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

    test("Deve lançar uma exceção para um usuário não existente", async () => {
      await expect(
        userRepository.findOneByEmail("manoelvitorbrito@gmail.com")
      ).rejects.toThrow(
        Error("User with email manoelvitorbrito@gmail.com does not exist")
      );
    });
  });

  describe("insert", () => {
    test("Inserir um novo usuário", async () => {
      const user = await userRepository.insert({
        name: "vitor",
        email: "manoelvitorbrito@gmail.com",
      });

      const result = await userRepository.findOneByEmail(
        "manoelvitorbrito@gmail.com"
      );

      console.log("oi");
      console.log("user: " + user);

      expect(result).toStrictEqual(user);
    });
  });

  describe("update", () => {
    test.todo("deve atualizar um usuário existente");
    test.todo("deve lançar uma execeção para um usuário não existente");
  });

  describe("update", () => {
    test.only("deve remover um usuário existente", async () => {
      const user = await userRepository.insert({
        name: "vitor",
        email: "manoelvitorbrito@gmail.com",
      });

      await userRepository.delete(user._id);

      await expect(
        userRepository.findOneByEmail("manoelvitorbrito@gmail.com")
      ).rejects.toThrow();
    });

    test.todo("deve lançar uma execeção para um usuário não existente");
  });

  describe("findAll", () => {
    test.todo("Deve retornar uma lista vazia de usuário");
    test.todo("Deve retornar uma lista contendo dois  usuários");
  });
});
