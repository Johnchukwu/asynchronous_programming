//Task 01: Iterating with Async/Await

async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      await new Promise(resolve => setTimeout(() => {
        console.log(value);
        resolve();
      }, 1000));
    }
  }
  
  // Example usage:
  iterateWithAsyncAwait([1, 2, 3]);

  
  //Task 02: Awaiting a Call

  async function awaitCall() {
    try {
      const response = await fetch('https://blog.hubspot.com/website/api-endpoint'); // Replace with a real API endpoint
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('API call failed:', error);
    }
  }
  
  //Example usage:
    awaitCall();

   //Task 03: : Handling Errors with Async/Await

   async function awaitCall() {
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  // Example usage:
  awaitCall();

  //Task 04:Awaiting Concurrent Requests

  async function concurrentRequests() {
    try {
      const [response1, response2] = await Promise.all([
        fetch('https://api.example.com/data1'),
        fetch('https://api.example.com/data2')
      ]);
      
      const data1 = await response1.json();
      const data2 = await response2.json();
      
      console.log('Response from API 1:', data1);
      console.log('Response from API 2:', data2);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  }
  
  // Example usage:
  concurrentRequests();

  
  //Task 05: Awaiting Parallel Calls

  async function parallelCalls(urls) {
    try {
      const responses = await Promise.all(urls.map(url => fetch(url)));
      
      const responseData = await Promise.all(responses.map(response => response.json()));
      
      console.log('Responses:', responseData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  }
  
  // Example usage:
  const urls = ['https://api.example.com/data1', 'https://api.example.com/data2'];
  parallelCalls(urls);
  