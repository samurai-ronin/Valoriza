import {Entity,PrimaryColumn,CreateDateColumn,Column, JoinColumn, ManyToOne} from "typeorm";
import { v4 as uuid} from "uuid";
import { Tag } from "./Tag";
import { User } from "./User";

@Entity("compliments")
class Compliment {
@PrimaryColumn()
readonly id:string;

@Column()
message:string;

@Column()
user_sender:string;
@JoinColumn({name:"user_sender"})
@ManyToOne(()=> User)
UserSender:User


@Column()
user_receiver:string;
@JoinColumn({name:"user_receiver"})
@ManyToOne(()=> User)
c:User

@Column()
tag_id:string;
@JoinColumn({name:"tag_id"})
@ManyToOne(()=> Tag)
tag:Tag

@CreateDateColumn()
created_at:Date;


constructor(){
    if (!this.id) {
        this.id = uuid();
    }
}

}
export {Compliment}