/**
 * Copyright (C) SkillworksIT Solutions Pvt Ltd - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skillworks IT <contact@skillworksit.com>, Aug 2024
 */

const gDaoimpl = require('../daos/daosimpls/B2bEuGoalsDaosImpl');
const gDao = require('../daos/B2bEuGoalsDaos');

const getB2bEuGoalList = (reqBody, tData, callback) => {
  const obj = gDaoimpl.goalList(reqBody, tData);
  gDao.getB2bEuGoalList(reqBody, obj, callback);
}

const postB2bEuGoalCreate = (reqBody, tData, callback) => {
  const crtObj = gDaoimpl.goalCreateObj(reqBody, tData);
  gDao.postB2bEuGoalCreate(crtObj, resObj => {
    if (resObj.status == '200') {
      const obj = Object.assign({}, resObj.resData.result.toObject());
      const lfcObj = gDaoimpl.goallfcCreateObj(obj, tData);
      gDao.postB2bEuGoalCreate(lfcObj, resObj => {});
    }
    callback(resObj);
  });
}

const putB2bEuGoalUpdate = (recordId, reqBody, tData, callback) => {
  const updObj = gDaoimpl.updategoalObj(recordId, reqBody, tData);
  gDao.putB2bEuGoalUpdate(updObj.query, updObj.uObj, resObj => {
    if (resObj.status == '200') {
      const obj = Object.assign({}, resObj.resData.result.toObject());
      const lfcObj = gDaoimpl.goallfcCreateObj(obj, tData);
      gDao.postB2bEuGoalCreate(lfcObj, resObj => {});
    }
    callback(resObj);
  });
}

const putB2bEuGoalStatusUpdate = (recordId, reqBody, tData, callback) => {
  const updObj = gDaoimpl.stsUpdategoalObj(recordId, reqBody, tData);
  gDao.putB2bEuGoalUpdate(updObj.query, updObj.uObj, resObj => {
    if (resObj.status == '200') {
      const obj = Object.assign({}, resObj.resData.result.toObject());
      const lfcObj = gDaoimpl.goallfcCreateObj(obj, tData);
      gDao.postB2bEuGoalCreate(lfcObj, resObj => {});
    }
    callback(resObj);
  });
}

const posttB2bEuGoalRvwCreateUpdate = (recordId, reqBody, tData, callback) => {
  const rObj = gDaoimpl.goalRvwObj(recordId, reqBody, tData);
  gDao.putB2bEuGoalUpdate(rObj.query, rObj.uObj, resObj => {
    if (resObj.status == '200') {
      const obj = Object.assign({}, resObj.resData.result.toObject());
      const lfcObj = gDaoimpl.goallfcCreateObj(obj, tData);
      gDao.postB2bEuGoalCreate(lfcObj, resObj => {});
      const goalRvwObj = gDaoimpl.goalRvwLfcCreateObj(obj, tData);
      gDao.postB2bEuGoalCreate(goalRvwObj, resObj => {});
    }
    callback(resObj);
  });
}

const puttB2bEuGoalRvwDelete = (recordId, tData, callback) => {
  const rObj = gDaoimpl.goalDelObj(recordId, tData);
  gDao.putB2bEuGoalUpdate(rObj.query, rObj.uObj, resObj => {
    if (resObj.status == '200') {
      const obj = Object.assign({}, resObj.resData.result.toObject());
      const lfcObj = gDaoimpl.goallfcCreateObj(obj, tData);
      gDao.postB2bEuGoalCreate(lfcObj, resObj => {});
    }
    callback(resObj);
  });
}

const getB2bEuGoallifeCylceList = (recordId, tData, callback) => {
  const obj = gDaoimpl.lfCylgoalList(recordId, tData);  
  gDao.getB2bEuGoallifeCylceList(obj, callback);
}

module.exports = {
  getB2bEuGoalList, postB2bEuGoalCreate, putB2bEuGoalUpdate, putB2bEuGoalStatusUpdate, posttB2bEuGoalRvwCreateUpdate,
  puttB2bEuGoalRvwDelete, getB2bEuGoallifeCylceList
};
