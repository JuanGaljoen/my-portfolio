terraform {
  required_providers {
    aws = {
      version = "5.72.1"
      source  = "hashicorp/aws"
    }
  }
}

provider "aws" {
  profile = "default"
  region  = "af-south-1"
}
