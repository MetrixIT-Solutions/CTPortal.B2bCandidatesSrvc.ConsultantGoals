/**
 * Copyright (C) SkillworksIT Solutions Pvt Ltd - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skillworks IT <contact@skillworksit.com>, Aug 2024
 */

const SetRes = require('../SetRes');
const logger = require('../lib/logger');
const euGoals = require('../schemas/B2BEuGoals');
const B2BEuGoalsLcs = require('../schemas/B2BEuGoalsLcs');
const {uniq} = require('../consts/B2bEuGoalsConsts.json');

const getB2bEuGoalList = (reqBody, query, callback) => {
  let resultObj = { gListCount: 0, gList: [] };
logger.error('====query:' + JSON.stringify(query));
  if (reqBody.lKey == 'expAll') {
    euGoals.find(query).sort({cDtStr: -1}).then((resObj) => {
      if (resObj && resObj.length > 0) {
        const sr = SetRes.successRes(resObj);
        callback(sr);
      } else {
        const noData = SetRes.noData([]);
        callback(noData);
      }
    }).catch((error) => {
      logger.error('Un-known Error in daos/B2bEuGoalsDaos.js, at getB2bEuGoalList:' + error);
      const err = SetRes.unKnownErr(resultObj);
      callback(err);
    });
  } else {
    euGoals.find(query).sort({cDtStr: -1}).skip((reqBody.pgNum - 1) * reqBody.limit).limit(reqBody.limit).then((resObj) => {
      if (resObj && resObj.length > 0) {
        getB2bEuGoalListCount(query, resObj, callback);
      } else {
        const noData = SetRes.noData(resultObj);
        callback(noData);
      }
    }).catch((error) => {
      logger.error('Un-known Error in daos/B2bEuGoalsDaos.js, at getB2bEuGoalList:' + error);
      const err = SetRes.unKnownErr(resultObj);
      callback(err);
    });
  }
}

const postB2bEuGoalCreate = (createObj, callback) => {
  createObj.save().then((resObj) => {
    if (resObj._id) {
      const result = SetRes.successRes(resObj);
      callback(result);
    } else {
      const sf = SetRes.createFailed({});
      callback(sf);
    }
  }).catch((error) => {
    if (error.keyPattern && error.keyPattern.gType) {
      logger.error('Uniqueness(gType) Error in daos/B2bEuGoalsDaos.js, at postB2bEuGoalCreate:' + error);
      const err = SetRes.uniqueErr(uniq.gtErr);
      callback(err);
    } else if (error.keyPattern && error.keyPattern.gTitle) {
      logger.error('Uniqueness(gTitle) Error in daos/B2bEuGoalsDaos.js, at postB2bEuGoalCreate:' + error);
      const err = SetRes.uniqueErr(uniq.gtlErr);
      callback(err);
    } else {
      logger.error('Un-known Error in daos/B2bEuGoalsDaos.js, at putB2bEuGoalUpdate:' + error);
      const err = SetRes.unKnownErr({});
      callback(err);
    }
  });
}

const putB2bEuGoalUpdate = (query, updateObj, callback) => {
  euGoals.findOneAndUpdate(query, updateObj, { new: true }).then((resObj) => {
    if (resObj && resObj._id) {
      const result = SetRes.successRes(resObj);
      callback(result);
    } else {
      const uf = SetRes.updateFailed({});
      callback(uf);
    }
  }).catch((error) => {
    if (error.keyPattern && error.keyPattern.gType) {
      logger.error('Uniqueness(gType) Error in daos/B2bEuGoalsDaos.js, at putB2bEuGoalUpdate:' + error);
      const err = SetRes.uniqueErr(uniq.gtErr);
      callback(err);
    } else if (error.keyPattern && error.keyPattern.gTitle) {
      logger.error('Uniqueness(gTitle) Error in daos/B2bEuGoalsDaos.js, at commonCreateFunc:' + error);
      const err = SetRes.uniqueErr(uniq.gtlErr);
      callback(err);
    } else {
      logger.error('Un-known Error in daos/B2bEuGoalsDaos.js, at postEuGoalCreate:' + error);
      const err = SetRes.unKnownErr({});
      callback(err);
    }
  });
}

const getB2bEuGoallifeCylceList = (query, callback) => {
  B2BEuGoalsLcs.find(query).sort({cDtStr: -1}).then((resObj) => {
    if (resObj && resObj.length > 0) {
      const result = SetRes.successRes(resObj);
      callback(result);
    } else {
      const noData = SetRes.noData([]);
      callback(noData);
    }
  }
  ).catch((error) => {
    logger.error('Un-known Error in daos/B2bEuGoalsDaos.js, at getB2bEuGoallifeCylceList:' + error);
    const err = SetRes.unKnownErr({});
    callback(err);
  });
}

module.exports = {
  getB2bEuGoalList, postB2bEuGoalCreate, putB2bEuGoalUpdate, getB2bEuGoallifeCylceList
};

const getB2bEuGoalListCount = (query, resObj, callback) => {
  let resultObj = { gListCount: 0, gList: resObj };
  euGoals.countDocuments(query).then((resultCount) => {
    if (resultCount) {
      resultObj = { gListCount: resultCount, gList: resObj };
      const result = SetRes.successRes(resultObj);
      callback(result);
    } else {
      const result = SetRes.successRes(resultObj);
      callback(result);
    }
  }).catch((error) => {
    logger.error('Un-known Error in daos/B2bEuGoalsDaos.js, at getB2bEuGoalListCount:' + error);
    const result = SetRes.successRes(resultObj);
    callback(result);
  });
};

