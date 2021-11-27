class UserRepository {
  constructor(collection) {
    this.collection = collection;
  }

  async findOneByEmail() {}
}

module.exports = UserRepository;
