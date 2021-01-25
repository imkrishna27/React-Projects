import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
} from "./types";
import streams from "../apis/streams";
import history from '../history';

export const signIn = (userid) => {
  return {
    type: SIGN_IN,
    payload: userid,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formData) => {
  return async (dispatch,getState) => {
    const {userid}=getState().authVal;
    const response = await streams.post("/streams", {...formData,userid});
    dispatch({ type: CREATE_STREAM, payload: response.data });
    history.push('/');
  };
};

export const fetchStreams = () => {
  return async (dispatch) => {
    const response = await streams.get("/streams");
    dispatch({ type: FETCH_STREAMS, payload: response.data });
  };
};

export const fetchStream = (id) => {
  return async (dispatch) => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({ type: FETCH_STREAM, payload: response.data });
  };
};

export const editStream = (id,formData) => {
  return async (dispatch) => {
    const response = await streams.patch(`/streams/${id}`,formData);
    dispatch({ type: EDIT_STREAM, payload: response.data });
    history.push('/');
  };
};

export const deleteStream = (id) => {
  return async (dispatch) => {
    await streams.delete(`/streams/${id}`);
    dispatch({ type: DELETE_STREAM, payload: id});
    history.push('/');
  };
};