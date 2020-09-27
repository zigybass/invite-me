import React from "react";
import axios, { AxiosResponse } from "axios";
import { Requests } from "./restEnums";

type newEvent = {
  name: string;
  onGoing: boolean;
};

const _get = (url: string): Promise<AxiosResponse<any>> => {
  return axios.get(url);
};

const _post = (url: string, data: newEvent): Promise<AxiosResponse<any>> => {
  return axios({
    method: Requests.POST,
    url: url,
    data: data,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const _delete = (url: string): Promise<AxiosResponse<any>> => {
  return axios({
    method: "delete",
    url: url,
  });
};

export const getEvents = (): Promise<AxiosResponse<any>> => {
  const url: string = "http://localhost:8080/events";
  return _get(url);
};

export const getEventById = (id: string): Promise<AxiosResponse<any>> => {
  const url: string = `http://localhost:8080/events/${id}`;
  return _get(url);
};

export const addEventToAPI = (data: newEvent): Promise<AxiosResponse<any>> => {
  const url: string = "http://localhost:8080/events";
  return _post(url, data);
};

export const deleteEvent = (id: string): Promise<AxiosResponse<any>> => {
  const url: string = `http://localhost:8080/events/${id}`;
  return _delete(url);
};
