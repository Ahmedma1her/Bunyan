variable "vpc_name" {
  type = string
}

variable "cidr_block" {
  type = string
}

variable "public_subnet_cidr" {
  type = string
}

variable "availability_zone" {
  type = string
}

variable "igw_name" {
  type = string
}

variable "route_table_name" {
  type = string
}
variable "allowed_ssh_cidr" {
  type = string
}