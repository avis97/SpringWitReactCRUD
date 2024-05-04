package SpringWithReact.fullStack.Service;


import SpringWithReact.fullStack.Entity.User;
import SpringWithReact.fullStack.Exception.UserNotFoundException;
import SpringWithReact.fullStack.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService{
    @Autowired
    UserRepository userRepository;

    public User addUser(User user){
       User user1= userRepository.save(user);
        return user1;
    }

    public User findUserById(int userId) throws UserNotFoundException {
        User user;
        try{
            user=userRepository.findById(userId).get();
        }catch (Exception e){
            throw new UserNotFoundException("User Not Found with this id");
        }
        return user;
    }

    public User updateUserById(int userId, User newuser) throws UserNotFoundException {
        User newUser;
            newUser=userRepository.findById(userId).map(user->{
                user.setFirstName(newuser.getFirstName());
                user.setLastName(newuser.getLastName());
                user.setNumber(newuser.getNumber());
                user.setEmail(newuser.getEmail());
                return userRepository.save(user);
            }).orElseThrow(()->new
                    UserNotFoundException("User Not found with this id!"));
        return newUser;
    }

    public void deleteUser(int userId) throws UserNotFoundException{
        if(!userRepository.existsById(userId)){
            throw new UserNotFoundException("User not fount with the id");
        }
        userRepository.deleteById(userId);
    }

    public List<User> getAllUser(){
        List<User> users=userRepository.findAll();
        return users;
    }
}
