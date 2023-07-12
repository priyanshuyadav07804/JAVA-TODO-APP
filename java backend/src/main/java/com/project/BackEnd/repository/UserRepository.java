package com.project.BackEnd.repository;

import com.project.BackEnd.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

}
