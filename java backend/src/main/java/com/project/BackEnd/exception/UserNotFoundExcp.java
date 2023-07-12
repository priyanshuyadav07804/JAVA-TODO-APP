package com.project.BackEnd.exception;

public class UserNotFoundExcp extends RuntimeException {
    public UserNotFoundExcp(Long id){
        super("Could not found the user with id"+id);
    }

}
