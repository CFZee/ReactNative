/* 
This is the service layer of the applications, All api calls should be called from here.
*/
import {config}  from '../Config/Global';

const url = config.serviceEndpoint;

export function getEventInfo() {
  var api = url+'events?per_page=100';
  return fetch(api)
  .then( (response) => response.json() );
}

export function floorPlan(){
  var api = url+'floorPlan';
  return fetch(api)
  .then((response) => response.json());
}

export function getDefaultEvent() {
  var api = url+'events/?per_page=100';
  return fetch(api)
  .then( (response) => response.json() );
}

export function speakersAndpresentersInfo() {
  var api = url+'speaker_presenter?per_page=100';
  return fetch(api)
  .then( (response) => response.json() );
}


export function attendeesInfo() {
  var api = url+'attendees?per_page=100';
  return fetch(api)
  .then( (response) => response.json() );
}

export function abstractInfo() {
  var api = url+'abstracts?per_page=100';
  return fetch(api)
  .then( (response) => response.json() );
}

export function sponsorsInfo() {
  var api = url+'sponsors?per_page=100';
  return fetch(api)
  .then( (response) => response.json() );
}

export function partnersInfo() {
  var api = url+'partner?per_page=100';
  return fetch(api)
  .then( (response) => response.json() );
}

export function exhibitorsInfo(){
  var api = url+'exhibitor?per_page=100';
  return fetch(api)
  .then( (response) => response.json() );
}

export function technicalSessionsInfo(){
  var api = url+'technical_sessions?per_page=100';
  return fetch(api)
  .then( (response) => response.json() );
}

export function networkSessionsInfo(){
  var api = url+'networking_sessions?per_page=100';
  return fetch(api)
  .then( (response) => response.json() );
}

export function newsAndUpdatesInfo(){
  var api = url+'networking_sessions?per_page=100';
  return fetch(api)
  .then( (response) => response.json() );
}