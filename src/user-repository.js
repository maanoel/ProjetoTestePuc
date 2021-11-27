class UserRepository {
  constructor(collection) {
    this.collection = collection;
  }

  async findOneByEmail(email) {
    const user = await this.collection.findOne({ email });

    if (user == null) {
      throw new Error(`User with email ${email} does not exist`);
    }
    return user;
  }
}

module.exports = UserRepository;
