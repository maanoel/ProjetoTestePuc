const { TestWatcher } = require("@jest/core");

describe("UserRepository", () => {
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
