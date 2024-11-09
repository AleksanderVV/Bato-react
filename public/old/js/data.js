
async function fetchData() {
  var url = 'data.php'; 

  try {
      var response = await fetch(url);
      
      if (!response.ok) {
          throw new Error('Error loading data: ' + response.status);
      }

      dataContent = await response.text();

      return dataContent;

  } catch (error) {
      console.error('Error loading data: ', error);
  }
}

export { fetchData };