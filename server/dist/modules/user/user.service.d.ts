import { CreateUserDto } from "./dto/create-user.dto";
import { FindUserDto } from "./dto/find-user.dto";
export declare class UserService {
    Create(createUserDto: CreateUserDto): Promise<{
        uid: number;
        username: string;
        password: string;
        relation_characterid: number;
    }>;
    FindUserByUsername(findUserDto: FindUserDto): Promise<{
        uid: number;
        username: string;
        password: string;
        relation_characterid: number;
    }[]>;
    FindUserByAll(findUserDto: FindUserDto): Promise<{
        uid: number;
        username: string;
        password: string;
        relation_characterid: number;
    }[]>;
    FindOneByUsername(username: string): Promise<{
        uid: number;
        username: string;
        password: string;
        relation_characterid: number;
    }>;
}
