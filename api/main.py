from flask import Flask,app
from flask_restful import Resource,Api,abort,reqparse
from flask_mysqldb import MySQL
from flask_cors import CORS,cross_origin
import MySQLdb.cursors


app = Flask(__name__)

api = Api(app)
cors = CORS(app)


mysql = MySQL(app)


app.config['MYSQL_HOST']="localhost"
app.config['MYSQL_USER']="root"
app.config['MYSQL_PASSWORD']=""
app.config['MYSQL_DB']="pharmacy_db"

# ######################################### 


medicine_put_args = reqparse.RequestParser()
medicine_put_args.add_argument("drug_name",type=str,help="name of the drug",required=True)
medicine_put_args.add_argument("manufacture",type=str,help="name of the manufacture",required=True)
medicine_put_args.add_argument("supplier",type=str,help="name of the supplier",required=True)
medicine_put_args.add_argument("ndc",type=str,help="name of the NDC",required=True)
medicine_put_args.add_argument("date",type=str,help="expiration date",required=True)
medicine_put_args.add_argument("quantity",type=str,help="amount of drugs",required=True)
medicine_put_args.add_argument("unit_price",type=str,help="price of the drug",required=True)
medicine_put_args.add_argument("is_deleted",type=str,help="deleted or not",required=True)



pharmacy_put_args = reqparse.RequestParser()
pharmacy_put_args.add_argument("pharmacy_name",type=str,help="name of the pharmacy",required=True)
pharmacy_put_args.add_argument("email",type=str,help="email of the pharmacy",required=True)
pharmacy_put_args.add_argument("address",type=str,help="address of the pharmacy",required=True)
pharmacy_put_args.add_argument("phone",type=str,help="phone number of the pharmacy",required=True)

pharmacy_put_args.add_argument("liscene",type=str,help="pharmacy liscene",required=True)
pharmacy_put_args.add_argument("password",type=str,help="pharmacy password",required=True)
pharmacy_put_args.add_argument("confirm_password",type=str,help="pharmacy confirm password",required=True)







class Medicine(Resource):

    
    @cross_origin()
    def get(self,action):
        if action == "all":
            cursor= mysql.connection.cursor(MySQLdb.cursors.DictCursor)
            cursor.execute(""" select * from medicine""")
            data = cursor.fetchall()
            mysql.connection.commit()
            cursor.close()

            return {"data":data},200

        

        

        


            

    # def get_one(self,action):
    #     cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    #     cursor.execute(""" select * from new_table where id=%s""",[action])
    #     data = cursor.fetchone()
    #     mysql.connection.commit()
    #     cursor.close()

    #     return data

    # def get_all(self):
    #     cursor= mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    #     cursor.execute(""" select * from new_table""")
    #     data = cursor.fetchall()
    #     mysql.connection.commit()
    #     cursor.close()

        # return data
    


    @cross_origin()
    def post(self,action):
        if action=="fetch":
            args=medicine_put_args.parse_args()
            drugname = args['drug_name']
            manufacture = args['manufacture']
            supplier = args['supplier']
            ndc = args['ndc']
            date = args['date']
            quantity = args['quantity']
            unit_price = args['unit_price']
            is_deleted = args['is_deleted']

            
            

            cursor= mysql.connection.cursor(MySQLdb.cursors.DictCursor)
            cursor.execute("""insert into medicine (drug_name,manufacture,supplier,NDC,Expiration_date,Quantity,Unit_price,is_deleted) values(%s,%s,%s,%s,%s,%s,%s,%s)""",[drugname,manufacture,supplier,ndc,date,quantity,unit_price,is_deleted])
            mysql.connection.commit()
            cursor.close()


            return {"status":"medicine added succesfully"},200
        
        else:
            args=medicine_put_args.parse_args()
            drugname = args['drug_name']
            manufacture = args['manufacture']
            supplier = args['supplier']
            ndc = args['ndc']
            date = args['date']
            quantity = args['quantity']
            unit_price = args['unit_price']
            is_deleted = args['is_deleted']
          



            
        
            cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
            cursor.execute("""UPDATE medicine
                              SET drug_name = %s, manufacture = %s, supplier = %s, NDC = %s, Expiration_date = %s, Quantity = %s, Unit_price = %s,is_deleted = %s
                              WHERE id = %s;""",[drugname,manufacture,supplier,ndc,date,quantity,unit_price,is_deleted,action])
            mysql.connection.commit()
            cursor.close()

            return {"status":"updated success"}
        
    
    @cross_origin()
    def delete(self,action):
        
        

        cursor= mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute("""delete from medicine where id=%s""",[action])
        mysql.connection.commit()
        cursor.close()


        return {"status":"deleted succesfully"}


class Pharmacy(Resource):

    @cross_origin()
    def get(self,action):
        if action == "all":
            cursor= mysql.connection.cursor(MySQLdb.cursors.DictCursor)
            cursor.execute(""" select * from pharmacy""")
            data = cursor.fetchall()
            mysql.connection.commit()
            cursor.close()

            return {"data":data},200
    

    @cross_origin()
    def post(self,action):
        if action == "signup":
            self.signup()
        
        elif action == "signin":
            self.signin()
            

    @cross_origin()  
    def signup(self):
        args=pharmacy_put_args.parse_args()
        pharmacyname = args['pharmacy_name']
        email = args['email']
        address = args['address']
        phone = args['phone']
        liscene = args['liscene']
        password = args['password']
        confirm_password = args['confirm_password']

        cursor= mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute("""insert into pharmacy (pharmacy_name,email,address,phone,liscene,password,confirm_password) values(%s,%s,%s,%s,%s,%s,%s)""",[pharmacyname,email,address,phone,liscene,password,confirm_password])
        mysql.connection.commit()
        cursor.close()


        return {"status":"pharmacy added succesfully"},200  
    @cross_origin()
    def signin(self):
        args=pharmacy_put_args.parse_args()
        email = args['email']
        password = args['password']
        cursor= mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute("""select * from pharmacy where email=%s and password=%s""",[email,password])
        data = cursor.fetchone()
        mysql.connection.commit()
        cursor.close()

        if data:
            return {"status":"login success"},200
        else:
            return {"status":"login failed"},400






api.add_resource(Medicine,"/api/medicine/<string:action>")
api.add_resource(Pharmacy,"/api/pharmacy/<string:action>")

# end points
#get all todos  : http://127.0.0.1:5000/medicine/todo/all
#get one with id :http://127.0.0.1:5000/api/todo/3
#post a todo : http://127.0.0.1:5000/api/medicine/fetch
#delete a todo with id : http://127.0.0.1:5000/api/medicine/2

#isdone :  http://127.0.0.1:5000/api/todo/18

if __name__ == "__main__":
    app.run(debug=True)




