export const exerciseoptions ={
    method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_API_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchData = async(url,options )=>{
    const response = await fetch(url,options)
    const data = response.json();
    return data;
}