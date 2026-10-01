

import {test , expect} from "@playwright/test"

import { getConnection } from "../../utils/db"


test("Connecting Data Base" , async ({}) => {

    const connect = await getConnection()

    //CREATE TABLE
    await connect.execute(
        `CREATE TABLE TRENDS 
        (Emp_id int primary key auto_increment,
        Emp_name varchar(50) not null , 
        Emp_age int not null ); `)

    //INSERT VALUES
    await connect.execute(
        `INSERT INTO TRENDS (Emp_name, Emp_age) 
        VALUES 
    ('Arun', 25), ('Soumiya' , 25) , ('Ravi' , 24) , ('Mohana' , 23)  `)    


})















