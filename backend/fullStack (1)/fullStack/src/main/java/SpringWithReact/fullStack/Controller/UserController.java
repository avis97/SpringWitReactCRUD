package SpringWithReact.fullStack.Controller;

import SpringWithReact.fullStack.Entity.User;
import SpringWithReact.fullStack.Exception.UserNotFoundException;
import SpringWithReact.fullStack.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin("*")
public class UserController{

    @Autowired
    UserService userService;

    @PostMapping("add")
    public User addUser(@RequestBody User user){
        User newUser=userService.addUser(user);
        return newUser;
    }
    @GetMapping("getAllUser")
    public List<User> getAllUser(){
        List<User> users=userService.getAllUser();
        return users;
    }
    @GetMapping("get/{userId}")
    public ResponseEntity getUser(@PathVariable("userId") int userId)
            throws UserNotFoundException {
        User user;
        try{
            user=userService.findUserById(userId);
        }catch (UserNotFoundException e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(user,HttpStatus.OK);
    }
    @PutMapping("update/{userId}")
    public ResponseEntity updateUser(@PathVariable("userId") int userId,
                                          @RequestBody User user) throws UserNotFoundException {
        User updateUser = null;
        try{
            updateUser=userService.updateUserById(userId,user);
        }catch (UserNotFoundException e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(updateUser,HttpStatus.OK);
    }
    @DeleteMapping("delete/{userId}")
    public ResponseEntity deleteUser(@PathVariable("userId") int userId) throws UserNotFoundException{
        try {
            userService.deleteUser(userId);
        }catch (UserNotFoundException e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("delete done by this id",HttpStatus.OK);
    }

}
