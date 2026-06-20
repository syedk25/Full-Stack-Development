//interface for define rule
interface MessageService{
    void sendMessage(String msg);
}

//class provide services
class EmailService implements MessageService{
    @Override
    public void sendMessage(String msg){
        System.out.println("Method in EmailService "+msg);
    }
}
// class manager use the services
class NotificationManager{
    private final MessageService messageService;
    NotificationManager(MessageService messageService)
    {
        this.messageService=messageService;
    }
    public void sendAlert(){
        System.out.println("Notification class sendAlert Method called");
        this.messageService.sendMessage("welcome to mastering spring boot");
    }
}
// Start the execution
public class Main{
    public static void main(String[] args)
    {
        //create dependency and pass to controller
     NotificationManager object=new NotificationManager(new EmailService());
     //call controller method to use service
     object.sendAlert();
    }
}