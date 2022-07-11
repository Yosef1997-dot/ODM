**Creating image and running the front side of the application in container:**

1. Run inside the Front folder the next command (with the dot):
docker build -t home_assignment_front .

2. Run the next command:
docker run --name home_assignment_front_c -p 3000:3000 --rm home_assignment_front

3. Now it's running on port 3000 and if there is also connction to DB you can use the app 

4. To stop and remove the container just run this command:
docker stop home_assignment_front_c



**Running locally**

1. Run inside the Front folder the next command:
npm i

2. Run the next command:
npm start

3. Now it's running on port 3000 and if there is also connction to DB you can use the app 




