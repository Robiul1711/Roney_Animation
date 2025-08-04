import Title from "@/components/common/Title";
import React, { useState, useRef, useEffect } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { RiCloseLargeFill } from "react-icons/ri";
import DropdownInput from "@/components/common/DropdownInput";
import { useForm } from "react-hook-form";

const labelTextStyle = "text-lg md:text-xl text-white font-semibold";

const revenueOptions = ["$100k - $500k", "$500k - $1M", "$1M - $5M", "$5M - $10M", "$10M+"];
const sizeOptions = ["1 - 10", "11 - 50", "51 - 200", "201 - 500", "500+"];
const budgetOptions = ["$5k - $10k", "$10k - $25k", "$25k - $50k", "$50k+"];
const serviceOptions = ["Web Development", "AI Consulting", "Mobile App", "UI/UX", "Other"];

const GetInTouch = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      role: "",
      companyName: "",
      companyWebsite: "",
      companySize: "",
      annualRevenue: "",
      projectBudget: "",
      services: "",
      message: "",
    },
  });

  const [openDropdown, setOpenDropdown] = useState(null);
  const containerRef = useRef(null);

  // Close dropdown if click outside or focus other inputs
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }

    function handleFocusIn(event) {
      if (containerRef.current && containerRef.current.contains(event.target)) return;
      setOpenDropdown(null);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("focusin", handleFocusIn);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("focusin", handleFocusIn);
    };
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // Here you would typically send the data to your backend
    // reset(); // Uncomment to reset form after submission
  };

  return (
    <div className="min-h-screen bg-custom section-padding-x py-16 relative" ref={containerRef}>
      <Title level="title32" className="text-white text-center">
        Tell us where you're at
      </Title>

      <Link to="/">
        <RiCloseLargeFill className="absolute top-5 right-5 text-3xl cursor-pointer text-white hover:text-custom-primary duration-300" />
      </Link>

      <div className="my-16 max-w-5xl mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-10" onFocus={() => setOpenDropdown(null)}>
          {/* Name */}
          <div>
            <label htmlFor="name" className={labelTextStyle}>
              What is your name?
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full bg-transparent text-white border-b border-white/50 placeholder:text-white/70 focus:outline-none py-3 mt-2"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="text-red-400 mt-1 text-sm">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={labelTextStyle}>
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="w-full bg-transparent text-white border-b border-white/50 placeholder:text-white/70 focus:outline-none py-3 mt-2"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <p className="text-red-400 mt-1 text-sm">{errors.email.message}</p>}
          </div>

          {/* Role */}
          <div>
            <label htmlFor="role" className={labelTextStyle}>
              What is your role in the company?
            </label>
            <input
              type="text"
              id="role"
              placeholder="Your role"
              className="w-full bg-transparent text-white border-b border-white/50 placeholder:text-white/70 focus:outline-none py-3 mt-2"
              {...register("role", { required: "Role is required" })}
            />
            {errors.role && <p className="text-red-400 mt-1 text-sm">{errors.role.message}</p>}
          </div>

          {/* Company Name */}
          <div>
            <label htmlFor="companyName" className={labelTextStyle}>
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              placeholder="Company Name"
              className="w-full bg-transparent text-white border-b border-white/50 placeholder:text-white/70 focus:outline-none py-3 mt-2"
              {...register("companyName", { required: "Company name is required" })}
            />
            {errors.companyName && <p className="text-red-400 mt-1 text-sm">{errors.companyName.message}</p>}
          </div>

          {/* Company Website */}
          <div>
            <label htmlFor="companyWebsite" className={labelTextStyle}>
              Company Website
            </label>
            <input
              type="url"
              id="companyWebsite"
              placeholder="https://example.com"
              className="w-full bg-transparent text-white border-b border-white/50 placeholder:text-white/70 focus:outline-none py-3 mt-2"
              {...register("companyWebsite", {
                pattern: {
                  value: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
                  message: "Please enter a valid URL",
                },
              })}
            />
            {errors.companyWebsite && <p className="text-red-400 mt-1 text-sm">{errors.companyWebsite.message}</p>}
          </div>

          {/* Company Size Dropdown */}
          <div className="relative">
            <DropdownInput
              label="Company Size"
              selectedValue={watch("companySize")}
              setSelectedValue={(value) => setValue("companySize", value)}
              isOpen={openDropdown === "size"}
              setIsOpen={() => toggleDropdown("size")}
              options={sizeOptions}
            />
            {errors.companySize && <p className="text-red-400 mt-1 text-sm">Please select company size</p>}
          </div>

          {/* Company's Annual Revenue Dropdown */}
          <div className="relative">
            <DropdownInput
              label="Company's Annual Revenue"
              selectedValue={watch("annualRevenue")}
              setSelectedValue={(value) => setValue("annualRevenue", value)}
              isOpen={openDropdown === "revenue"}
              setIsOpen={() => toggleDropdown("revenue")}
              options={revenueOptions}
            />
            {errors.annualRevenue && <p className="text-red-400 mt-1 text-sm">Please select annual revenue</p>}
          </div>

          {/* Project Budget Dropdown */}
          <div className="relative">
            <DropdownInput
              label="Project Budget"
              selectedValue={watch("projectBudget")}
              setSelectedValue={(value) => setValue("projectBudget", value)}
              isOpen={openDropdown === "budget"}
              setIsOpen={() => toggleDropdown("budget")}
              options={budgetOptions}
            />
            {errors.projectBudget && <p className="text-red-400 mt-1 text-sm">Please select project budget</p>}
          </div>

          {/* Services Interested Dropdown */}
          <div className="relative">
            <DropdownInput
              label="What services are you interested in?"
              selectedValue={watch("services")}
              setSelectedValue={(value) => setValue("services", value)}
              isOpen={openDropdown === "service"}
              setIsOpen={() => toggleDropdown("service")}
              options={serviceOptions}
            />
            {errors.services && <p className="text-red-400 mt-1 text-sm">Please select at least one service</p>}
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label htmlFor="message" className={labelTextStyle}>
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message here..."
              className="w-full bg-transparent text-white border-b border-white/50 placeholder:text-white/70 focus:outline-none py-3 mt-2 resize-none"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && <p className="text-red-400 mt-1 text-sm">{errors.message.message}</p>}
          </div>
        </form>

        <div className="flex justify-end mt-5">
          <button
            type="submit"
            className="bg-custom-primary text-white rounded-full py-3 px-6 flex items-center gap-2 hover:bg-opacity-90 transition-colors duration-300"
            onClick={handleSubmit(onSubmit)}
          >
            Send inquiry
            <MdOutlineArrowOutward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;