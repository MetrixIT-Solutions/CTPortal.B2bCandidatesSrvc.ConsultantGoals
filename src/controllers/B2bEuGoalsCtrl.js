/**
 * Copyright (C) SkillworksIT Solutions Pvt Ltd - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by SkillworksIT <contact@skillworksit.com>, Aug 2024
 */

const gCv = require('../controllers/apiVldns/B2bEuGoalsCtrlVldn');
const gSrvc = require('../services/B2bEuGoalsSrvc');
const util = require('../lib/util');
const SetRes = require('../SetRes');
const tokens = require('../tokens');

const apiServerStatus = (req, res) => {
  const resObj = SetRes.apiServerStatus();
  util.sendApiRes(res, resObj);
}

const getB2bEuGoalList = (req, res) => {
  const vds = gCv.goalListVldn(req);
  if (vds.flag) {
    tokens.refreshToken(req.headers.ctpb2batoken, res, (tData) => {
      const tv = gCv.tokenVldn(tData);
      if (tv.flag) {
        gSrvc.getB2bEuGoalList(req.body, tData.tokenData, (resObj) => {
          const apiRes = {...resObj, userObj: tData?.data};
          util.sendApiRes(res, apiRes);
        });
      } else util.sendApiRes(res, tv.result);
    });
  } else util.sendApiRes(res, vds.result);
}

const postB2bEuGoalCreate = (req, res) => {
  const vds = gCv.gCreateVldn(req);
  if (vds.flag) {
    tokens.refreshToken(req.headers.ctpb2batoken, res, (tData) => {
      const tv = gCv.tokenVldn(tData);
      if (tv.flag) {
        gSrvc.postB2bEuGoalCreate(req.body, tData.tokenData, (resObj) => {
          const apiRes = {...resObj, userObj: tData?.data};
          util.sendApiRes(res, apiRes);
        });
      } else util.sendApiRes(res, tv.result);
    });
  } else util.sendApiRes(res, vds.result);
}

const putB2bEuGoalUpdate = (req, res) => {
  const vds = gCv.gUpdteVldn(req);
  if (vds.flag) {
    tokens.refreshToken(req.headers.ctpb2batoken, res, (tData) => {
      const tv = gCv.tokenVldn(tData);
      if (tv.flag) {
        gSrvc.putB2bEuGoalUpdate(req.params.recordId, req.body, tData.tokenData, (resObj) => {
          const apiRes = {...resObj, userObj: tData?.data};
          util.sendApiRes(res, apiRes);
        });
      } else util.sendApiRes(res, tv.result);
    });
  } else util.sendApiRes(res, vds.result);
}

const putB2bEuGoalStatusUpdate = (req, res) => {
  const vds = gCv.gStsUpdteVldn(req);
  if (vds.flag) {
    tokens.refreshToken(req.headers.ctpb2batoken, res, (tData) => {
      const tv = gCv.tokenVldn(tData);
      if (tv.flag) {
        gSrvc.putB2bEuGoalStatusUpdate(req.params.recordId, req.body, tData.tokenData, (resObj) => {
          const apiRes = {...resObj, userObj: tData?.data};
          util.sendApiRes(res, apiRes);
        });
      } else util.sendApiRes(res, tv.result);
    });
  } else util.sendApiRes(res, vds.result);
}

const posttB2bEuGoalRvwCreateUpdate = (req, res) => {
  const vds = gCv.gReviewVldn(req);
  if (vds.flag) {
    tokens.refreshToken(req.headers.ctpb2batoken, res, (tData) => {
      const tv = gCv.tokenVldn(tData);
      if (tv.flag) {
        gSrvc.posttB2bEuGoalRvwCreateUpdate(req.params.recordId, req.body, tData.tokenData, (resObj) => {
          const apiRes = {...resObj, userObj: tData?.data};
          util.sendApiRes(res, apiRes);
        });
      } else util.sendApiRes(res, tv.result);
    });
  } else util.sendApiRes(res, vds.result);
}

const puttB2bEuGoalRvwDelete = (req, res) => {
  const vds = gCv.gDelVldn(req);
  if (vds.flag) {
    tokens.refreshToken(req.headers.ctpb2batoken, res, (tData) => {
      const tv = gCv.tokenVldn(tData);
      if (tv.flag) {
        gSrvc.puttB2bEuGoalRvwDelete(req.params.recordId, tData.tokenData, (resObj) => {
          const apiRes = {...resObj, userObj: tData?.data};
          util.sendApiRes(res, apiRes);
        });
      } else util.sendApiRes(res, tv.result);
    });
  } else util.sendApiRes(res, vds.result);
}

const getB2bEuGoallifeCylceList = (req, res) => {  
  const vds = gCv.gDelVldn(req);  
  if (vds.flag) {
    tokens.refreshToken(req.headers.ctpb2batoken, res, (tData) => {
      const tv = gCv.tokenVldn(tData);
      if (tv.flag) {
        gSrvc.getB2bEuGoallifeCylceList(req.params.recordId, tData.tokenData, (resObj) => {
          const apiRes = {...resObj, userObj: tData?.data};
          util.sendApiRes(res, apiRes);
        });
      } else util.sendApiRes(res, tv.result);
    });
  } else util.sendApiRes(res, vds.result);
}

module.exports = {
  apiServerStatus, getB2bEuGoalList, postB2bEuGoalCreate, putB2bEuGoalUpdate, putB2bEuGoalStatusUpdate, posttB2bEuGoalRvwCreateUpdate,
  puttB2bEuGoalRvwDelete, getB2bEuGoallifeCylceList
}