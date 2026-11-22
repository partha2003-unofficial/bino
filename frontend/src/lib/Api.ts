/*
LEARN: 
An interceptor: is a function that allows you to inspect or modify a request or response before 
it reaches your application code.

   Interceptor	                           Purpose
Request interceptor	           Runs before sending a request
Response interceptor	       Runs after receiving a response

** Your complete understanding in one flow: 
1. Create Axios instance
   
   Configure common settings once (baseURL, withCredentials).
2. Make an API request
   
   Use api.get(), api.post(), api.put(), etc.
3. Response interceptor executes
   
   Checks whether the request succeeded or failed.
4. If successful
   
   Returns the original response.
5. If failed
   
   Checks Axios error, sets a useful error message and rejects the Promise.
6. Try-catch handles the result
   
   try handles success; catch handles failure.

*/

import axios from "axios";

export const api = axios.create({
   baseURL: 'http://localhost:4000/api/v1',
   withCredentials: true,
   timeout: 5000
})

api.interceptors.response.use(
   response => response,
   error => {
      if (axios.isAxiosError(error)) {
         error.message = error.response?.data?.message ?? 'could not reach the server.';
         // console.log(error)
      }

      return Promise.reject(error);
   }
)
