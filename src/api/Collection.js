import { Mongo } from 'meteor/mongo';

export const TasksCollection = new Mongo.Collection('tasks');
export const TwitterCollection = new Mongo.Collection('twitter');
export const RemindCollection = new Mongo.Collection('remind');
export const UsersAppDB = new Mongo.Collection('userappdb');
export const TransitionCollection = new Mongo.Collection('transition')
export const MailsCollection = new Mongo.Collection('mails')
export const WebActivity = new Mongo.Collection('webactivity')
export const Blog = new Mongo.Collection('blog')
