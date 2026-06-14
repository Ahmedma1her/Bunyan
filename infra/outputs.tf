output "vpc_id" {
  value       = aws_vpc.main.id
  description = "ID of the VPC"
}

output "public_subnet_ids" {
  value       = [for subnet in aws_subnet.public : subnet.id]
  description = "IDs of public subnets in each AZ"
}

output "internet_gateway_id" {
  value       = aws_internet_gateway.gw.id
  description = "ID of the Internet Gateway"
}

output "route_table_id" {
  value       = aws_route_table.public.id
  description = "ID of the public route table"
}

output "security_group_id" {
  value       = aws_security_group.web_sg.id
  description = "ID of the web security group"
}

output "launch_template_id" {
  value       = aws_launch_template.web.id
  description = "ID of the launch template"
}

output "asg_name" {
  value       = aws_autoscaling_group.web.name
  description = "Name of the Auto Scaling Group"
}

output "asg_min_size" {
  value       = aws_autoscaling_group.web.min_size
  description = "Minimum size of the ASG"
}

output "asg_max_size" {
  value       = aws_autoscaling_group.web.max_size
  description = "Maximum size of the ASG"
}

output "asg_desired_capacity" {
  value       = aws_autoscaling_group.web.desired_capacity
  description = "Desired capacity of the ASG"
}