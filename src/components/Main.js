import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';

const Main = () => {
  const [status, setStatus] = useState('');
  const [value, setValue] = useState(null);
  let data = [
    {
      value: 'Open',
    },
    {
      value: 'Submitted',
    },
    {
      value: 'Approved',
    },
    {
      value: 'Rejected',
    },
  ];

  const companyData = [
    {
      id: 1,
      name: 'HCL',
      status: 'Open',
      regularHours: '43:00',
      totalHours: '43:00',
      employeeRemarks: 'remarks',
      submittedDate: '06-01-2021',
      timePeriod: '05-28-2021 - 06-04-2021',
    },
    {
      id: 2,
      name: 'HCL',
      status: 'Submitted',
      regularHours: '43:00',
      totalHours: '43:00',
      employeeRemarks: 'remarks',
      submittedDate: '06-01-2021',
      timePeriod: '05-28-2021 - 06-04-2021',
    },
    {
      id: 3,
      name: 'HCL',
      status: 'Rejected',
      regularHours: '43:00',
      totalHours: '43:00',
      employeeRemarks: 'remarks',
      submittedDate: '06-01-2021',
      timePeriod: '05-28-2021 - 06-04-2021',
    },
    {
      id: 4,
      name: 'HCL',
      status: 'Approved',
      regularHours: '43:00',
      totalHours: '43:00',
      employeeRemarks: 'remarks',
      submittedDate: '06-01-2021',
      timePeriod: '05-28-2021 - 06-04-2021',
    },
    {
      id: 5,
      name: 'HCL',
      status: 'Approved',
      regularHours: '43:00',
      totalHours: '43:00',
      employeeRemarks: 'remarks',
      submittedDate: '06-01-2021',
      timePeriod: '05-28-2021 - 06-04-2021',
    },
    {
      id: 6,
      name: 'HCL',
      status: 'Approved',
      regularHours: '43:00',
      totalHours: '43:00',
      employeeRemarks: 'remarks',
      submittedDate: '06-01-2021',
      timePeriod: '05-28-2021 - 06-04-2021',
    },
    {
      id: 7,
      name: 'HCL',
      status: 'Approved',
      regularHours: '43:00',
      totalHours: '43:00',
      employeeRemarks: 'remarks',
      submittedDate: '06-01-2021',
      timePeriod: '05-28-2021 - 06-04-2021',
    },
    {
      id: 8,
      name: 'HCLs',
      status: 'Approved',
      regularHours: '43:00',
      totalHours: '43:00',
      employeeRemarks: 'remarks',
      submittedDate: '06-01-2021',
      timePeriod: '05-28-2021 - 06-04-2021',
    },
  ];

  const filteredCompanyData =
    status === ''
      ? companyData
      : companyData.filter(
          company => company.status.toLowerCase() === status.toLowerCase(),
        );

  const getStatusColor = status => {
    if (status === 'Approved') {
      return 'green';
    } else if (status === 'Open') {
      return 'blue';
    } else if (status === 'Rejected') {
      return 'red';
    } else {
      return 'grey';
    }
  };

  const valueToggle = id => {
    if (value === null) {
      setValue(id);
    } else if (value === id) {
      setValue(null);
    } else {
      setValue(id);
    }
  };

  const setTextColor = id => {
    if (value === id) {
      return 'white';
    } else {
      return 'black';
    }
  };

  const getValue = id => {
    return value === id;
  };

  return (
    <View styles={styles.container}>
      <View style={{width: 100, marginLeft: 20}}>
        <Dropdown
          label="Status"
          data={data}
          onChangeText={value => setStatus(value)}
        />
      </View>
      <View style={styles.listContainer}>
        {filteredCompanyData.length ? (
          <FlatList
            // style={{flex: 1}}
            data={filteredCompanyData}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <>
                <Pressable onPress={() => valueToggle(item.id)}>
                  <View
                    style={[
                      styles.card,
                      value === item.id
                        ? {backgroundColor: 'blue', marginBottom: 0}
                        : {},
                    ]}>
                    <View style={styles.innerCard}>
                      {/* <View
                  style={[
                    {
                      backgroundColor: `${getStatusColor(item.status)}`,
                    },
                    styles.statusTextContainer,
                  ]}>
                  <Text>dfd</Text>
                </View> */}
                      {/* <View
                  style={[
                    {
                      backgroundColor: `${getStatusColor(item.status)}`,
                    },
                    styles.statusTextContainer,
                  ]}>
                </View> */}
                      {/* <View style={{backgroundColor: 'blue', height: '100%'}}>
                  <Text style={styles.statusText}>{item.status}</Text>
                </View> */}
                      <Text
                        style={{
                          width: 14,
                          fontSize: 11,
                          backgroundColor: `${getStatusColor(item.status)}`,
                          height: '100%',
                          color: 'white',
                          // flex: 1,
                        }}>
                        {item.status}
                      </Text>
                      <View style={styles.mainCard}>
                        {/* <View>
                          <Text
                            style={{
                              // transform: [{rotate: '90deg'}],
                              // padding: 15,
                              width: '100%',
                              // height: '100%',
                              backgroundColor: `${getStatusColor(item.status)}`,
                            }}>
                            {item.status}
                          </Text>
                        </View> */}
                        <View>
                          <Text style={{color: setTextColor(item.id)}}>
                            {item.name}
                          </Text>
                          <Text style={{color: setTextColor(item.id)}}>
                            {item.timePeriod}
                          </Text>
                        </View>
                        <View
                          style={{
                            transform: getValue(item.id)
                              ? [{rotate: '90deg'}]
                              : [{rotate: '0deg'}],
                          }}>
                          <Icon name="chevron-right" size={20} color="black" />
                        </View>
                      </View>
                    </View>
                  </View>
                </Pressable>
                <View
                  style={[
                    styles.detailsCard,
                    {display: value === item.id ? 'flex' : 'none'},
                  ]}>
                  <View>
                    <View>
                      <Text style={styles.detailsHeading}>Regular Hours</Text>
                      <Text>{item.regularHours}</Text>
                    </View>
                    <View>
                      <Text style={styles.detailsHeading}>
                        Employee Remarks
                      </Text>
                      <Text>{item.employeeRemarks}</Text>
                    </View>
                  </View>
                  <View>
                    <View>
                      <Text
                        style={[styles.detailsHeading, styles.rightDetails]}>
                        Total Hours
                      </Text>
                      <Text style={styles.rightDetails}>{item.totalHours}</Text>
                    </View>
                    <View>
                      <Text
                        style={[styles.detailsHeading, styles.rightDetails]}>
                        Submitted Date
                      </Text>
                      <Text style={styles.rightDetails}>
                        {item.submittedDate}
                      </Text>
                    </View>
                  </View>
                </View>
              </>
            )}
          />
        ) : (
          <View>
            <Text>Sorry! No data found!</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 190,
  },
  listContainer: {
    // flex: 1,
    padding: 12,
    paddingBottom: 170,
  },
  card: {
    height: 70,
    borderRadius: 8,
    // width: '100%',
    marginVertical: 12,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  statusTextContainer: {
    // marginRight: 'auto',
    paddingHorizontal: 10,
    // marginHorizontal: 5,
    height: '100%',
    // width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusText: {
    transform: [{rotate: '90deg'}],
    // height: '100%',
    width: 30,
    // padding: 0,
    // margin: 0,
    textAlign: 'center',
    // textAlign: 'left',
    fontSize: 8,
    color: 'white',
    // backgroundColor: 'red',
  },
  innerCard: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    // justifyContent: 'center',
    // backgroundColor: 'black',
  },
  mainCard: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'green',
    paddingHorizontal: 15,
  },

  detailsCard: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 40,
  },
  detailsHeading: {
    fontWeight: 'bold',
  },
  rightDetails: {
    textAlign: 'right',
  },
});
