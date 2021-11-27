class UserRepository {
  constructor(collection) {
    this.collection = collection;
  }

  async findOneByEmail(email) {
    const user = await this.collection.findOne({ email });

    return user;
  }
}

module.exports = UserRepository;
