variable "vpc_name" {
  type        = string
  description = "Name of the VPC"
}

variable "cidr_block" {
  type        = string
  description = "VPC CIDR block"
}

variable "public_subnet_cidrs" {
  type        = list(string)
  description = "CIDR blocks for public subnets in each AZ"
}

variable "availability_zones" {
  type        = list(string)
  description = "Availability zones for the subnets"
}

variable "igw_name" {
  type        = string
  description = "Internet Gateway name"
}

variable "route_table_name" {
  type        = string
  description = "Route table name"
}

variable "allowed_ssh_cidr" {
  type        = string
  description = "CIDR block allowed for SSH access"
}

variable "instance_ami" {
  type        = string
  description = "AMI ID for EC2 instances"
}

variable "instance_type" {
  type        = string
  description = "Instance type for EC2 instances"
  default     = "t3.micro"
}

variable "asg_min_size" {
  type        = number
  description = "Minimum number of instances in ASG"
  default     = 2
}

variable "asg_max_size" {
  type        = number
  description = "Maximum number of instances in ASG"
  default     = 4
}

variable "asg_desired_capacity" {
  type        = number
  description = "Desired number of instances in ASG"
  default     = 2
}
