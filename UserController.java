package lab.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

import org.springframework.http.MediaType;

import entity.Car;
import entity.Cart;
import entity.MyMessage;
import entity.User;
import repository.CartRepository;
import repository.InventoryRepository;
import repository.MessageRepository;
import repository.UserRepository;

@Controller
@CrossOrigin
public class UserController {
	public static final String ACCOUNT_SID = "AC43195767c692b1dff334cfbd440e290c";
    public static final String AUTH_TOKEN = "c39b820a3c7c6c9275dde997f356cb4f";
    public static final String TWILIO_NUMBER = "+16184143963";
    
	@Autowired
	UserRepository userRepository;
	@Autowired
	InventoryRepository inventoryRepository;
	@Autowired 
	MessageRepository messageRepo;
	@Autowired
	CartRepository cartRepo;
	
	

	@RequestMapping(value="/register", method=RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User>registerUser(@RequestBody User user){
	System.out.println(user);
	userRepository.save(user);
	return new ResponseEntity<>(user, HttpStatus.CREATED);
	}
	
	@RequestMapping("signIn")
	public ModelAndView login() {
		return new ModelAndView("login","user",new User());
	}
//	@RequestMapping(value="/signIn", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
//	public ResponseEntity<User>login(@RequestBody User user){
//	User myUser = userRepository.findOne(user.getPassword());
//	System.out.println(myUser);
//	return new ResponseEntity<>(myUser, HttpStatus.OK);
//	}
	@RequestMapping(value="/inventory", method=RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Car>AddCar(@RequestBody Car car){
		inventoryRepository.save(car);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	@RequestMapping(value="/cars", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Car>> findCars(){
		List<Car> cars = inventoryRepository.findAll();
		return new ResponseEntity<>(cars, HttpStatus.OK);
	}
	@RequestMapping(value="/users", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<User>> findUsers(){
		List<User> customers = userRepository.findAll();
		return new ResponseEntity<>(customers, HttpStatus.OK);
	}
	
	//
	 @RequestMapping(value = "/sendsms", method = RequestMethod.POST)
		public ResponseEntity<List<MyMessage>> sendSms(@RequestBody MyMessage sms ) {
		 messageRepo.save(sms);
			Twilio.init(ACCOUNT_SID, AUTH_TOKEN);

		    Message message = Message.creator(new PhoneNumber(sms.getSmsTo()),
		        new PhoneNumber(sms.getSmsFrom()), 
		        sms.getBody()).create();

	    System.out.println(message.getSid());
		  
			
			//userService.saveUser(user);
	    	List<MyMessage> smslist = messageRepo.findAll();
	    	return new ResponseEntity<>(smslist,HttpStatus.CREATED);
			
		}
	 
	 @RequestMapping(value="/shoppingCart", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	 public ResponseEntity<HttpStatus> addCart(@RequestBody String name){
		// cartRepo.save(cart);
		 MyMessage sms = new MyMessage();
		 sms.setSmsFrom(TWILIO_NUMBER);
		 sms.setSmsTo("+13143974015");
		 sms.setBody("New Order has been Made");
		 sendSms(sms);
		 return new ResponseEntity<>( HttpStatus.CREATED);
	 }
	
	
}
