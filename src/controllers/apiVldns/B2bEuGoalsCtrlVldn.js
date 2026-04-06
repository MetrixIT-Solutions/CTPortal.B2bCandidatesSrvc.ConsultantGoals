/**
 * Copyright (C) SkillworksIT Solutions Pvt Ltd - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skillworks IT <contact@skillworksit.com>, Aug 2024
 */

const sRes = require('../../SetRes');

const tokenVldn = (tData) => {
  if (!tData) {
    const result = sRes.tokenInvalid();
    return { flag: false, result };
  } else if (tData.isExpired) {
    const result = sRes.tokenExpired();
    return { flag: false, result };
  } else if (!tData.tokenData) {
    const result = sRes.tokenSsnErr();
    return { flag: false, result };
  } else {
    return { flag: true, result: tData.tokenData };
  }
}

const goalListVldn = (req) => {
  const reqBody = req.body;
  if (!req.headers.ctpb2batoken) {
    const te = sRes.tokenRequired();
    return { flag: false, result: te };
  } else if (!reqBody.gStatus) {
    const mn = sRes.mandatory();
    return { flag: false, result: mn };
  } else {
    return { flag: true };
  }
}

const gCreateVldn = (req) => {
  const reqBody = req.body;
  if (!req.headers.ctpb2batoken) {
    const te = sRes.tokenRequired();
    return { flag: false, result: te };
  } else if (!reqBody.euUser || !reqBody.euName || !reqBody.euEmID || !reqBody.euUID || !reqBody.euPrimary || !reqBody.gsDtStr || !reqBody.gType || !reqBody.gCategory || !reqBody.gAccmnts || !reqBody.gStatus) {
    const mn = sRes.mandatory();
    return { flag: false, result: mn };
  } else {
    return { flag: true };
  }
}

const gUpdteVldn = (req) => {
  const reqBody = req.body;
  if (!req.headers.ctpb2batoken) {
    const te = sRes.tokenRequired();
    return { flag: false, result: te };
  } else if (!req.params.recordId || !reqBody.gsDtStr || !reqBody.gType || !reqBody.gCategory || !reqBody.gAccmnts || !reqBody.gStatus) {
    const mn = sRes.mandatory();
    return { flag: false, result: mn };
  } else {
    return { flag: true };
  }
}

const gStsUpdteVldn = (req) => {
  const reqBody = req.body;
  if (!req.headers.ctpb2batoken) {
    const te = sRes.tokenRequired();
    return { flag: false, result: te };
  } else if (!req.params.recordId || !reqBody.gStatus || !reqBody.gsDtStr || !reqBody.gsNotes) {
    const mn = sRes.mandatory();
    return { flag: false, result: mn };
  } else {
    return { flag: true };
  }
}

const gReviewVldn = (req) => {
  const reqBody = req.body;
  if (!req.headers.ctpb2batoken) {
    const te = sRes.tokenRequired();
    return { flag: false, result: te };
  } else if (!req.params.recordId || !reqBody.gReview || !reqBody.grRating) {
    const mn = sRes.mandatory();
    return { flag: false, result: mn };
  } else {
    return { flag: true };
  }
}

const gDelVldn = (req) => {
  if (!req.headers.ctpb2batoken) {
    const te = sRes.tokenRequired();
    return { flag: false, result: te };
  } else if (!req.params.recordId) {
    const mn = sRes.mandatory();
    return { flag: false, result: mn };
  } else {
    return { flag: true };
  }
}

module.exports = {
  tokenVldn, goalListVldn, gCreateVldn, gUpdteVldn, gStsUpdteVldn, gReviewVldn, gDelVldn
}