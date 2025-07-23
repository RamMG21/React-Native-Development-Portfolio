import { Feather, FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const data = [
  {
    label: '📅 Create project timeline',
    date: new Date('2024-12-12'),
    completed: true,
  },
  {
    label: '🎯 Define project goals',
    date: new Date('2025-01-05'),
    completed: false,
  },
  {
    label: '👥 Identify project stakeholders',
    date: new Date('2025-01-09'),
    completed: true,
  },
  {
    label: '📝 Gather project requirements',
    date: new Date('2025-01-12'),
    completed: false,
  },
  {
    label: '💰 Create project budget',
    date: new Date('2025-01-15'),
    completed: false,
  },
];

const collaborators = [
  {
    name: 'David Z. (you)',
    avatar:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
  },
  {
    name: 'Sierra K.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
  },
  {
    name: 'Jack W.',
    avatar:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
  },
];

const index = () => {
  const [task, setTask] = useState(data);
  return (
    <View style={{flex : 1 }}>
      <SafeAreaView >
        <View style = {styles.header}>
          <View style = {styles.headerAction}>
            <TouchableOpacity onPress={() => {
                //handel onPress
            }}>
              <Feather name="chevron-left" color="#000" size={40}/> 
            </TouchableOpacity>
          </View>

            <Text numberOfLines = {1} style = {styles.headerTitle}>My Task</Text>

          <View style = {[styles.headerAction, {alignItems: 'flex-end'}]}>
            <TouchableOpacity onPress={() => {
                //handel onPress
            }}>
              <Feather name="more-vertical" color="#000" size={40}/> 
            </TouchableOpacity>
          </View>
          </View>

            <ScrollView style = {{paddingBottom: 50}}>
              <View style = {styles.section}>
                <Text style = {styles.title}>Project Planing</Text>

                <View style = {styles.row}>
                  <Text style = {styles.rowValue}>Due date</Text>
                  <Text style = {styles.rowValue}>Jul 22, 2025</Text>
                </View>

                <View style = {styles.row}>
                  <Text style = {styles.rowField}>Status</Text>
                  <View style = {styles.badge}>
                    <Text style = {styles.badgeText}>In Progress</Text>
                  </View>
                </View>
                
                <View style = {styles.rowcoll}>
                  <Text style = {styles.rowField}>Collaborators</Text>
                  <View>
                    {collaborators.map(({name, avatar}, index) => {
                      return (
                        <TouchableOpacity style = {styles.collaborator} onPress = {() => {
                          //Handel Press
                        }}>
                          <Image alt = "" source = {{uri:avatar}} style = {styles.avatar}></Image>
                          <Text style = {styles.collaboratorText}>{name}</Text>
                        </TouchableOpacity>
                      )
                    })}
                  </View>
                </View>
              </View>

              <View style = {styles.section}>
                <Text style = {styles.sectionTitle}>Description</Text>
                <Text style = {styles.sectionText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis itaque ad repellendus ab nesciunt, voluptatem atque officia incidunt repudiandae deleniti illo aperiam minus iusto ipsam. Vero incidunt dolorem magnam consequuntur.</Text>
              </View>

              <View style = {styles.section}>
                <Text style = {styles.sectionTitle}>Task</Text>
                    {task.map(({label, date, completed}, index) => {
                      const isActive = completed === true;
                      const dateFormatted = date.toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })

                      const description = completed ? `Completed on ${dateFormatted}`: 'Not completed';
                      return (
                        <TouchableOpacity style = {styles.task} onPress={() =>{
                          setTask(value => {
                            value[index].completed = !value[index].completed;
                            return[...value];
                          })
                        }}>
                          <View style = {[styles.taskIcon, {backgroundColor: isActive ? '#eb3333' : '#fff'}]}>
                            <FontAwesome color = "#fff" name = "check" size = {11} style = {!isActive && {display: 'none'}}></FontAwesome>
                          </View>

                          <View>
                             <Text style = {styles.taskLabel}>{label}</Text>
                            <Text style = {styles.taskDescription} >{description}</Text>
                          </View>
                        </TouchableOpacity>
                      )
                    })}
              </View>

            </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default index

const styles = StyleSheet.create ({
  title:{
    fontSize: 23,
    fontWeight: '600',
    color: "#lelele",
    paddingBottom: 10
  },
  header: {
    flexDirection: 'row',
    marginTop :70,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: '500',
    color: "black",
    flex: 1,
    textAlign: 'center'
  },
  section: {
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#d7d7d7',
    backgroundColor: '#ffff',
    paddingTop: 12,
    marginBottom: 8
  },
  sectionTitle:{
    fontSize: 20,
    fontWeight: '600',
    color: "#lelele",
    marginBottom: 16
  },
  sectionText:{
    fontSize: 14,
    lineHeight: 20,
    color: '#444',
    marginBottom: 16

  },
  row: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  rowcoll: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginVertical: 8,
    justifyContent: "flex-start"
  },
  rowField: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0e0e0e',
    width: 130
  },
  rowValue: {
    fontSize: 15,
    marginRight: 25,
    fontWeight: '500',
    color: '#171717'
  },
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "#ffa500"
  },
  badgeText: {
    fontSize: 15,
    fontWeight: '600',
    color: "#fff"
  },
  avatar: {
    width: 20,
    height: 20,
    borderRadius: 99,
  },
  collaborator: {
    flexDirection: "row",
    alignItems: 'center',
    marginBottom: 10
  },
  collaboratorText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#171717',
    marginLeft: 6
  },
  task:{
    position: 'relative',
    paddingTop: 12,
    paddingRight: 16,
    paddingBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  taskIcon:{
    marginTop: 4,
    marginRight: 12,
    marginBottom: 0,
    marginLeft: 6,
    width: 24,
    height: 24,
    borderColor: '#eb3333',
    borderRadius: 9999,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskLabel:{
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 5
  },
  taskDescription:{
    fontSize: 16,
    fontWeight: '400',
    color: '#959595'
  },

})