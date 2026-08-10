import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    profileHeadline: {
      type: String,
      trim: true,
    },
    hashedPassword: {
      type: String,
      trim: true,
    },
    profilePhoto: {
      type: String,
      trim: true,
    },
    coverPhoto: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    summary: {
      type: String,
      trim: true,
    },
    skills: [
      {
        type: String,
      },
    ],
    education: [
      {
        qualification: {
          type: String,
          trim: true,
        },
        institution: {
          type: String,
          trim: true,
        },
        fieldOfStudy: {
          type: String,
          trim: true,
        },
        startYear: {
          type: Number,
        },
        endYear: {
          type: Number,
        },
        grade: {
          type: Number,
        },
      },
    ],
    experiences: [
      {
        title: {
          type: String,
          trim: true,
        },
        employmentType: {
          type: String,
          trim: true,
        },
        company: {
          type: String,
          trim: true,
        },
        location: {
          type: String,
          trim: true,
        },
        isCurrentlyWorking: {
          type: Boolean,
        },
        startDate: {
          type: Date,
        },
        endDate: {
          type: Date,
        },
        description: {
          type: String,
          trim: true,
        },
      },
    ],
    projects: [
      {
        name: {
          type: String,
          trim: true,
        },
        description: {
          type: String,
          trim: true,
        },
        skills: [
          {
            type: String,
          },
        ],
        isCurrentlyWorking: {
          type: Boolean,
        },
        startDate: {
          type: Date,
        },
        endDate: {
          type: Date,
        },
        liveLink: {
          type: String,
          trim: true,
        },
      },
    ],
    certifications: [
      {
        name: {
          type: String,
          trim: true,
        },
        issuingOrganization: {
          type: String,
          trim: true,
        },
        issueDate: {
          type: Date,
        },
        expiryDate: {
          type: Date,
        },
        credentialId: {
          type: String,
          trim: true,
        },
        credentialUrl: {
          type: String,
          trim: true,
        },
      },
    ],
    resume: {
      type: String,
    },
    following: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        company: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Company",
        },
      },
    ],
    savedJobs: [
      {
        job: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Job",
        },
      },
    ],
    socialLinks: [
      {
        name: {
          type: String,
          trim: true,
        },
        url: {
          type: String,
          trim: true,
        },
      },
    ],
    recruiterVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
