export class User {

  public _id ?:string
  public google?:boolean
  public role?:string
  public name:string
  public email:string
  public password:string
  public img?:string
  public users?:string[]

         constructor(name, email,password,role?,_id?,google?,img?,users?) {
          this._id=_id;
          this.google=google;
          this.role=role;
          this.name = name;
          this.email = email;
          this.password= password;
          this.img=img;
          this.users=users
         }
       }