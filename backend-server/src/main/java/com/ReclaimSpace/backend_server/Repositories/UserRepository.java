package com.ReclaimSpace.backend_server.Repositories;

import com.ReclaimSpace.backend_server.Models.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, ObjectId> {

}
