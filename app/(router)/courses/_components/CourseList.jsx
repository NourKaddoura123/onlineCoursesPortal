"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CourseItem from "./CourseItem";

function CourseList() {
  //save courselist in permisiion
  const [courseList, setCourseList] = useState([]);
  useEffect(() => {
    getAllCourses();
  }, []);
  //Fetch courseList
  const getAllCourses = () => {
    GlobalApi.getAllCourseList().then((resp) => {
      setCourseList(resp?.courseLists);
    });
  };
  return (
    <div className="p-5 bg-white rounded-lg mt-5">
      {/* Title and Filter */}
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-bold text-primary">All Courses</h2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">All</SelectItem>
            <SelectItem value="dark">Paid</SelectItem>
            <SelectItem value="system">Free</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Display Course List */}
      <div>
        {courseList.map((item, index)=>(
            <div key={index}>
                <CourseItem course={item}/>
            </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
