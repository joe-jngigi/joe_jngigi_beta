"use client";
import React from "react";
import * as spinner from "react-spinners";

export const NewLoader = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap gap-8">
        <spinner.BarLoader  />
        <spinner.BeatLoader />
        <spinner.BounceLoader />
        <spinner.CircleLoader />
        <spinner.ClimbingBoxLoader />
        <spinner.ClipLoader />
        <spinner.ClockLoader />
        <spinner.DotLoader />
        <spinner.FadeLoader />
        {/* <spinner.GridLoader /> */}
        <spinner.HashLoader />
        <spinner.MoonLoader />
        <spinner.PacmanLoader />
        <spinner.PropagateLoader />
        <spinner.PuffLoader />
        <spinner.PulseLoader />
        <spinner.RingLoader />
        <spinner.RiseLoader />
        <spinner.RotateLoader />
        <spinner.ScaleLoader />
        <spinner.SkewLoader />
        <spinner.SquareLoader />
        <spinner.SyncLoader />
      </div>
    </>
  );
};
