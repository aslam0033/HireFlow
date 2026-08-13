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
      default: undefined,
    },

    experiences: {
      type: [
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
      default: undefined,
    },

    projects: {
      type: [
        {
          name: {
            type: String,
            trim: true,
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
      default: undefined,
    },

    certifications: {
      type: [
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