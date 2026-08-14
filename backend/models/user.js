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
    contactEmail:{
      type:String,
      trim:true
    },

    profileHeadline: {
      type: String,
      trim: true,
    },

    hashedPassword: {
      type: String,
      trim: true,
      required:true
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

    // Don't create [] automatically
    skills: {
      type: [String],
      default: undefined,
    },

    education: {
      type: [
        {
          qualification: {
            type: String,
            required:true,
            trim: true,
          },
          institution: {
            type: String,
            required:true,
            trim: true,
          },
          fieldOfStudy: {
            type: String,
            required:true,
            trim: true,
          },
          startYear: {
            type: Number,
            required:true,
          },
          endYear: {
            type: Number,
            required:true
          },
          grade: {
            type: Number,
          },
        },
      ],
      default: undefined,
    },

    experiences: {
      type: [
        {
          position: {
            type: String,
            trim: true,
            required:true
          },
          jobType: {
            type: String,
            trim: true,
            required:true
          },
          company: {
            type: String,
            trim: true,
            required:true,
          },
          location: {
            type: String,
            trim: true,
            required:true,
          },
          isCurrentlyWorking: {
            type: Boolean,
            default:false
          },
          startDate: {
            type: Date,
            required:true
          },
          endDate: {
            type: Date,
          },
          description: {
            type: String,
            trim: true,
          },
          experienceTime:{
            type:Number,
            trim:true
          }
        },
      ],
      default: undefined,
    },

    projects: {
      type: [
        {
          title: {
            type: String,
            trim: true,
            required:true,
          },
          description: {
            type: String,
            trim: true,
          },

          skills: {
            type: [String],
            default: undefined,
          },

          isCurrentlyWorking: {
            type: Boolean,
          },

          startDate: {
            type: Date,
            required:true
          },

          endDate: {
            type: Date,
          },

          projectUrl: {
            type: String,
            trim: true,
          },
        },
      ],
      default: undefined,
    },

    certifications: {
      type: [
        {
          name: {
            type: String,
            trim: true,
            required:true
          },
          issuingOrganization: {
            type: String,
            trim: true,
            required:true
          },
          issueDate: {
            type: Date,
            required:true
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
            required:true
          },
        },
      ],
      default: undefined,
    },

    resume: {
      type: String,
    },
    followers:{
      type:Number,
      default:0
    },
    following: {
      type: [
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
      default: undefined,
    },

    savedJobs: {
      type: [
        {
          job: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Job",
          },
        },
      ],
      default: undefined,
    },
    appliedJobs: {
      type: [
        {
          job: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Application",
          },
        },
      ],
      default: undefined,
    },

    socialLinks: {
      type: [
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
      default: undefined,
    },

    recruiterVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;