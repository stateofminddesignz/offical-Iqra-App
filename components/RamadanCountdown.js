import React ,{useEffect,useState} from 'react'
import {View, Text,StyleSheet} from 'react-native'
import moment from 'moment/moment'

const RamadanCountdown = () => {

    const [countdown, setCountdown] = useState('');

    useEffect(() => {
      const today = moment();
      const nextRamadanStart = getNextRamadanStartDate(today.year());
  
      const daysLeft = nextRamadanStart.diff(today, 'days');
      setCountdown(daysLeft);
    }, []);
  
    // Function to calculate the start date of the next Ramadan
    const getNextRamadanStartDate = (currentYear) => {
      // This function calculates the start date of Ramadan using a specific algorithm
      // You can replace this with your own method to determine the start date of Ramadan
  
      // Assuming Ramadan starts on the 1st of the 9th month (Islamic calendar)
      const ramadanStart = moment().year(currentYear).month(2).date(10);
  
      // If the current date is after the calculated start date, set the start date to next year
      if (moment().isAfter(ramadanStart)) {
        ramadanStart.add(1, 'year');
      }
  
      return ramadanStart;
    };

  return (
    <View style={styles.container}>
        <Text style={styles.ramadanHeader}>Road to Ramadan 1445</Text>
        <Text style={styles.counter}>{countdown} Days</Text>
        <Text style={styles.ramadanInfo}>During Ramadan the believers get busy seeking Allahs mercy, forgiveness, and protection from Hellfire.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
    backgroundColor:'white',
    alignItems: 'center',
    padding: 10,
    borderRadius:10,
    marginBottom: 20

    
    

   },
   ramadanHeader:{
    fontSize: 30,
    fontWeight: 'bold'
    
   },
   counter: {
    fontSize :60 , 
    fontWeight: 200,
    color: 'black'
   },
   ramadanInfo: {
    fontSize: 18
   
    
   }
})

export default RamadanCountdown