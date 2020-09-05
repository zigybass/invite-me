import React from "react";
import axios from "axios";

type getEventsObj = {
  name: string;
  id: string;
  onGoing: boolean;
};

const _get = (url: string): any => {
  return axios.get(url);
};

export const getEvents = (): any => {
  const url: string = "http://localhost:8080/events";
  return _get(url);
};
